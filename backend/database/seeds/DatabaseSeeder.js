'use strict';

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

const User = use('App/Models/User');

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'test',
      email: 'test@email.com',
      password: '123456'
    });

    const team = await user.teams().create({
      name: 'Team 1',
      user_id: user.id
    });
  }
}

module.exports = DatabaseSeeder;
