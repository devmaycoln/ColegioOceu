import * as Yup from 'yup';
import Charge from '../models/Charge';

class ChargeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id:  Yup.string(),
      school: Yup.string(),
      type: Yup.string(),
      reference: Yup.string(),
      amount: Yup.number(),
      expire_at: Yup.date(),

    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (chargeExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // const user = await User.create(req.body);
    // para nao mostrar o objeto todo (exemplo na linha acima), desconstruir o user conforme linha abaixo
    const {
      id,
      name,
      email,
      provider,
      password,
      avatar_id,
    } = await Charge.create(req.body);

    return res.json({
      id,
      name,
      email,
      password,
      provider,
      avatar_id,
    });

    // Linha acima retorna somente alguns campos da requisição. Para retornar o objeto todo, usar a const user conforme linha abaixo
    // return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new ChargeController();
