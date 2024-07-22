from odoo import models, fields

class Proveedor(models.Model):

    _name = 'borja.proveedor'

    _description = 'Proveedores'

    nombre = fields.Char(string='Nombre', required=True)
    contacto = fields.Text(string='Contacto')
    producto = fields.Many2many('borja.producto', string='Producto')
