import User from '../models/User';
import File from '../models/Files';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      atributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          atributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}
export default new ProviderController();
