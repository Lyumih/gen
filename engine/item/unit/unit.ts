namespace $ {
	export class $gen_engine_item_unit extends $gen_engine_item {

		// @$mol_mem
		// name( next?: string ) {
		// 	$mol_wire_solid()
		// 	return next ?? 'Unit'
		// }

		// @$mol_mem
		// type( next?: string ) {
		// 	$mol_wire_solid()
		// 	return next ?? 'unit'
		// }

		@$mol_mem
		points( next?: number ) {
			$mol_wire_solid()
			return next ?? 0
		}

		defaults() {
			const skill = new $gen_engine_item_skill().defaults()
			return {
				...super.defaults(),
				health: 20,
				attack: 10,
				skills: [] as typeof skill[]
			}
		}


		// @$mol_mem
		health( next?: number ) {
			// $mol_wire_solid()
			// return next ?? 20
			return this.value( 'health', next )
		}

		// @$mol_mem
		attack( next?: number ) {
			// 	$mol_wire_solid()
			return this.value( 'attack', next )
		}

		use_attack( targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) {
			targets.forEach( target => {
				target.health( target.health() - this.attack() )
				battle.log_attack( this, [ target ] )
			} )
			battle.next_turn()
		}

		use_skill( targets: $gen_engine_item_unit[], skill: $gen_engine_item_skill, battle: $gen_engine_battle ) {
			battle.log_skill( this, targets, skill )
			skill.use( this, targets, battle )
			battle.next_turn()
		}

		is_dead() {
			$mol_wire_solid()
			return this.health() <= 0
		}

		@$mol_mem
		equipments( next?: $gen_engine_item_equipment[] ) {
			$mol_wire_solid()
			return next ?? []
		}

		// @$mol_mem
		skills( next?: $gen_engine_item_skill[] ): $gen_engine_item_skill[] {
			// 	$mol_wire_solid()
			const skills = next ?? []
			console.log( 'skills', next, skills[ 0 ]?.defaults_patch(), this )
			// return JSON.parse( this.value( 'skills', JSON.stringify( next ) ) ) as $gen_engine_item_skill[]
			const value = this.value( 'skills', next?.map( skill => skill.defaults() ) )
			console.log( value )
			// return value.map( skill => $gen_engine_item_skill.make( skill ) )
			return value.map( skill => $gen_engine_item_skill.make( {
				defaults_patch: () => ( {
					...skill
				} ),
				id: 'restored-skill-heal'
			} ) )
		}

		@$mol_mem
		buffs( next?: $gen_engine_item_buff[] ): $gen_engine_item_buff[] {
			$mol_wire_solid()
			return next ?? []
		}

		@$mol_mem
		inventory( next?: $gen_engine_item[] ): $gen_engine_item[] {
			$mol_wire_solid()
			return next ?? []
		}

		@$mol_mem
		shop( next?: $gen_engine_item[] ): $gen_engine_item[] {
			$mol_wire_solid()
			return next ?? []
		}

		next_turn() {}

		refill() {
			this.health( undefined )
			this.attack( undefined )
		}

		duplicate(): $gen_engine_item_unit {
			const clone = new $gen_engine_item_unit

			return this
		}

	}
}
