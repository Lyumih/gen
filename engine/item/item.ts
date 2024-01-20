namespace $ {
	/**
	 * Основной класс для создания различных предметов (умения, предметы и т.д.)
	 */
	export class $gen_engine_item extends $mol_object {

		/** Корневой идентификатор умения в глобальной базе данных */
		@$mol_mem
		id_root( next?: string ) {
			$mol_wire_solid()
			return next ?? $mol_guid()
		}

		@$mol_mem
		id( next?: string ) {
			$mol_wire_solid()
			return next ?? `${ this.type() }-${ this.part() }-${ $mol_guid( 4 ) }`
		}

		@$mol_mem
		config( next?: {} ) {
			$mol_wire_solid()
			return next ?? {}
		}

		log( text: string ) {
		}

		/** Источник вдохновения */
		@$mol_mem
		reference( next?: string ) {
			$mol_wire_solid()
			return next ?? 'Gen'
		}


		@$mol_mem
		type( next?: string ) {
			$mol_wire_solid()
			return next ?? 'item'
		}

		@$mol_mem
		part( next?: string ) {
			$mol_wire_solid()
			return next ?? 'part'
		}

		@$mol_mem
		name( next?: string ) {
			$mol_wire_solid()
			return next ?? 'no name'
		}

		@$mol_mem
		description( next?: string ) {
			$mol_wire_solid()
			return next ?? 'no description'
		}

		@$mol_mem
		level( next?: number ) {
			$mol_wire_solid()
			return next ?? 0
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

		move( x: number, y: number ) {
			if( this.x() !== x || this.y() !== y ) {
				console.log( 'move ' + x + ' ' + y )
				this.x( x )
				this.y( y )
			}
		}
	}
}
