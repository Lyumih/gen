namespace $ {
	export class $gen_engine_item_unit extends $gen_engine_item {

		// defaults() {
		// 	const skill = new $gen_engine_item_skill().defaults()
		// 	return {
		// 		...super.defaults(),
		// 		health: 20,
		// 		attack: 10,
		// 		icon: '👤',
		// 		skills_data: [] as typeof skill[]
		// 	}
		// }

		data( data?: {
			health: number
			attack: number
			icon: string
			skills_data: $gen_engine_item_skill[]
		} ) {
			const skill = new $gen_engine_item_skill().defaults()

			return $mol_state_local.value( this.id, data ) ?? {
				health: 20,
				attack: 10,
				icon: '👤',
				skills_data: [] as typeof skill[]
			}
		}


		health( next?: number ) {
			return this.value( 'health', next )
		}

		icon_health() {
			return '❤️' + this.health()
		}

		attack( next?: number ) {
			return this.value( 'attack', next )
		}

		icon_attack() {
			return '🗡️' + this.attack()
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
			return this.health() <= 0
		}

		@$mol_mem
		equipments( next?: $gen_engine_item_equipment[] ) {
			$mol_wire_solid()
			return next ?? []
		}

		skills_data( next?: ReturnType<this[ 'defaults' ]>[ 'skills_data' ] ) {
			return this.value( 'skills_data', next )
		}

		skills(): $gen_engine_item_skill[] {
			return this.skills_data().map( skill => $gen_engine_item_skill.make( {
				defaults_patch: () => ( {
					...skill
				} )
			} ) )
		}

		add_skill( next: ReturnType<this[ 'defaults' ]>[ 'skills_data' ][ 0 ] ) {
			this.skills_data( [ ...this.skills_data(), next ] )
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

	}
}
