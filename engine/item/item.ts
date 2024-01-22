namespace $ {
	/**
	 * Основной класс для создания различных предметов (умения, предметы и т.д.)
	 */
	export class $gen_engine_item extends $gen_engine_entity {

		defaults() {
			return {
				// id: $mol_guid(),
				id_root: '',
				name: 'no name',
				icon: '📦',
				reference: '',
				type: 'item',
				part: 'part',
				description: 'no description',
				level: 0,
				points: 0,
				x: 0,
				y: 0,
				speed: 1,
				attack_range: 1
			}
		}

		id_root( next?: string ) {
			return this.value( 'id_root', next )
		}

		log( text: string ) {
		}

		/** Источник вдохновения */
		reference( next?: string ) {
			return this.value( 'reference', next )
		}


		type( next?: string ) {
			return this.value( 'type', next )
		}

		part( next?: string ) {
			return this.value( 'part', next )
		}

		name( next?: string ) {
			return this.value( 'name', next )
		}

		icon( next?: string ) {
			return this.value( 'icon', next )
		}

		icon_name( next?: string ) {
			return this.icon() + this.name()
		}

		description( next?: string ) {
			return this.value( 'description', next )
		}

		level( next?: number ) {
			return this.value( 'level', next )
		}

		points( next?: number ) {
			return this.value( 'points', next )
		}

		x( next?: number ) {
			return this.value( 'x', next )
		}

		y( next?: number ) {
			return this.value( 'y', next )
		}

		xy() {
			return [ this.x(), this.y() ]
		}

		in_range( x: number, y: number, range: number ) {
			return Math.abs( this.x() - x ) <= range && Math.abs( this.y() - y ) <= range
		}

		speed( next?: number ) {
			return this.value( 'speed', next )
		}

		attack_range( next?: number ) {
			return this.value( 'attack_range', next )
		}

		move( x: number, y: number ) {
			if( this.x() !== x || this.y() !== y ) {
				this.x( x )
				this.y( y )
			}
		}

	}
}
