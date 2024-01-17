namespace $ {
	export class $gen_engine_item_talent extends $gen_engine_item {
		override type() {
			$mol_wire_solid()
			return 'talent'
		}

		@$mol_mem
		x( next?: number ) {
			$mol_wire_solid()
			return next ?? 0
		}

		@$mol_mem
		y( next?: number ) {
			$mol_wire_solid()
			return next ?? 0
		}

		set_x_y( x: number, y: number ) {
			this.x( x )
			this.y( y )
		}
	}
}
