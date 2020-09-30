import {
  Router,
  Request,
  Response
} from 'express';
import {
  checkSchema,
  validationResult
} from 'express-validator';

import { User } from '../../models/User';

const router = Router();

const customValidationResult = validationResult.withDefaults({
  formatter: error => error.param
});

router.get('/'), (req: Request, res: Response) => {
  User
    .find()
    .then((users: any) => {
      res.json({
        payload: {
          users
        }
      });
    })
    .catch((error: any) => {
      console.error(error);
      res.sendStatus(500);
    });
};

router.post('/', checkSchema({
  avatarUrl: {
    in: 'body',
    isURL: {
      options: {
        protocols: ['http', 'https'],
        require_valid_protocol: true,
        require_protocol: true
      }
    }
  },
  name: {
    in: 'body',
    isLength: {
      options: {
        min: 1,
        max: 32
      }
    },
    isString: true,
  },
  age: {
    in: 'body',
    isNumeric: true
  }
}), (req: Request, res: Response) => {
  const result = customValidationResult(req);

  if (!result.isEmpty()) {
    res.status(400).json({
      payload: {
        errors: result.array()
      }
    });

    return;
  }

  const {
    avatarUrl,
    name,
    age,
  } = req.body;

  new User({
    avatarUrl,
    name,
    age
  })
    .save()
    .then(user => {
      res.json({
        payload: { user }
      });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

export { router as users };
