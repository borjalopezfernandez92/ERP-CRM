from odoo import models, fields

class Producto(models.Model):

    _name = 'borja.producto'

    _description = 'Productos'

    nombre = fields.Char(string='Nombre', required=True)
    descripcion = fields.Text(string='Descripción')
    precio_unitario = fields.Integer(string='Precio Unitario')
    cantidad_actual = fields.Integer(string='Cantidad Actual')
    cantidad_minima = fields.Integer(string='Cantidad Mínima')
    proveedor = fields.Many2many('borja.proveedor', string='Proveedor')
