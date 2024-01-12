namespace $ {
	export class $gen_engine_unit extends $.$mol_object {

		@$mol_mem
		name( next?: any ) {
			return next ?? 'Unit'
		}

		@$mol_mem
		health( next?: any ) {
			console.log( 'health', next )
			return next ?? this.common_unit().health
		}

		@$mol_mem
		attack( next?: any ) {
			return next ?? this.common_unit().attack
		}

		use_attack( target: $gen_engine_unit ) {
			console.log( 'use_attack' )
			target.health( target.health() - this.attack() )
		}

		use_skill( targets: $gen_engine_unit[], skill: any ) {
			skill.use( this, targets )
			console.log( 'use_skill' )
		}

		is_dead() {
			return this.health() <= 0
		}

		common_unit( next?: any ) {
			return next ?? {
				name: 'Unit',
				health: 20,
				attack: 10,
			}
		}

		refill() {
			this.health( null )
			this.attack( null )
		}
	}
}
