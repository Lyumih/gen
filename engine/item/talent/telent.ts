namespace $ {
	export class $gen_engine_item_talent extends $gen_engine_item {
		override type() {
			return 'talent'
		}

		@$mol_mem
		x( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		y( next?: number ) {
			return next ?? 0
		}

		set_x_y( x: number, y: number ) {
			this.x( x )
			this.y( y )
		}
	}
}
