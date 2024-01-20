namespace $ {
	/**
	 * Основной класс для создания различных предметов (умения, предметы и т.д.)
	 */
	export class $gen_engine_item extends $gen_engine_entity {

		// @$mol_mem
		// data( data = {
		// 	id: '',
		// 	id_root: '',
		// 	reference: '',
		// 	type: '',
		// 	part: 'part',
		// 	name: 'no name',
		// 	description: 'no description',
		// 	level: 0,
		// } ) {
		// 	// return $mol_state_local.value( `item=${ this.id() }`, data ) ?? data as any
		// 	return data
		// }

		// static defaults = {
		// 	id: '',
		// 	id_root: '',
		// 	reference: '',
		// 	type: '',
		// 	part: 'part',
		// 	name: 'no name',
		// 	description: 'no description',
		// 	level: 0,
		// 	x: 0,
		// 	y: 0,
		// 	speed: 0,
		// 	attack_range: 0
		// }

		defaults() {
			return {
				// id: $mol_guid(),
				id_root: '',
				reference: '',
				type: 'item',
				part: 'part',
				name: 'no name',
				description: 'no description',
				level: 0,
				x: 0,
				y: 0,
				speed: 1,
				attack_range: 1
			}
		}

		// @$mol_mem
		// data( data?: any ) {
		// 	return $mol_state_local.value( `item=${ this.id() }`, data ) ?? data
		// 	// return data
		// }

		// @$mol_wire_solo
		// data( data = {
		// 	title: '123'
		// 	dur: 23
		// } ) {
		// 	return $mol_state_local.value( `task=${ this.id() }`, data )
		// 		?? { title: '', cost: 0, dur: 0 } as any
		// }

		// @$mol_mem_key
		// value<
		// 	Field extends keyof ReturnType<this[ 'data' ]>
		// >(
		// 	field: Field,
		// 	value?: ReturnType<this[ 'data' ]>[ Field ],
		// ): ReturnType<this[ 'data' ]>[ Field ] {

		// 	return this.data( value === undefined
		// 		? undefined
		// 		: {
		// 			... this.data(),
		// 			[ field ]: value,
		// 		}
		// 	)[ field as never ]

		// }

		// /** Корневой идентификатор умения в глобальной базе данных */
		// @$mol_mem
		id_root( next?: string ) {
			// $mol_wire_solid()
			return this.value( 'id_root', next )
		}

		// @$mol_mem_key
		// id( next?: string ) {
		// 	// $mol_wire_solid()
		// 	// return next ?? `${ this.type() }-${ this.part() }-${ $mol_guid( 4 ) }`
		// 	return this.value( 'id', next ) ?? `${ this.type() }-${ this.part() }-${ $mol_guid( 4 ) }`
		// }

		log( text: string ) {
		}

		/** Источник вдохновения */
		// @$mol_mem
		reference( next?: string ) {
			// $mol_wire_solid()
			// return next ?? 'Gen'
			return this.value( 'reference', next )
		}


		// @$mol_mem
		type( next?: string ) {
			// $mol_wire_solid()
			// return next ?? 'item'
			return this.value( 'type', next )
		}

		// @$mol_mem
		part( next?: string ) {
			// $mol_wire_solid()
			// return next ?? 'part'
			return this.value( 'part', next )
		}

		// @$mol_mem
		name( next?: string ) {
			// $mol_wire_solid()
			// return next ?? 'no name'
			return this.value( 'name', next )
		}

		// @$mol_mem
		description( next?: string ) {
			// $mol_wire_solid()
			// return next ?? 'no description'
			return this.value( 'description', next )
		}

		// @$mol_mem
		level( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 0
			return this.value( 'level', next )
		}

		// @$mol_mem
		x( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 0
			return this.value( 'x', next )
		}

		// @$mol_mem
		y( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 0
			return this.value( 'y', next )
		}

		xy() {
			return [ this.x(), this.y() ]
		}

		in_range( x: number, y: number, range: number ) {
			return Math.abs( this.x() - x ) <= range && Math.abs( this.y() - y ) <= range
		}

		// @$mol_mem
		speed( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 1
			return this.value( 'speed', next )
		}

		// @$mol_mem
		attack_range( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 1
			return this.value( 'attack_range', next )
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
