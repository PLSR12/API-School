'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Registrations',
      [
        {
          status: 'confirmado',
          student_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 2,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 3,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 4,
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'cancelado',
          student_id: 1,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'cancelado',
          student_id: 2,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Registrations', null, {})
  },
}
