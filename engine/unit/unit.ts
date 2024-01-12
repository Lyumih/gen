namespace $ {
	export class $gen_engine_unit extends $.$mol_object {

		@$mol_mem
		name( next?: any ) {
			return next ?? 'Unit'
		}

		@$mol_mem
		health( next?: number ) {
			console.log( 'health', next )
			return next ?? this.common_unit().health
		}

		@$mol_mem
		attack( next?: number ) {
			return next ?? this.common_unit().attack
		}

		use_attack( target: $gen_engine_unit ) {
			// console.log( 'use_attack', this.battle().turn() )
			target.health( target.health() - this.attack() )
			this.next_turn()
		}

		use_skill( targets: $gen_engine_unit[], skill: any ) {
			skill.use( this, targets )
			console.log( 'use_skill' )
			this.next_turn()
		}

		is_dead() {
			return this.health() <= 0
		}

		common_unit() {
			return {
				name: 'Unit',
				health: 20,
				attack: 10,
			}
		}

		next_turn() {}

		refill() {
			this.health( this.common_unit().health )
			this.attack( this.common_unit().attack )
		}

	}
}
