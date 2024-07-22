from odoo import models, fields

class Empleado(models.Model):

    _name = 'borja.empleado'

    _description = 'Empleados'

    nombre = fields.Char(string='Nombre', required=True)
    cargo = fields.Text(string='Cargo')
