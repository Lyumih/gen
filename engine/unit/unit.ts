namespace $ {
	export class $gen_engine_unit extends $.$mol_object {

		@$mol_mem
		name( next?: any ) {
			return next ?? 'Unit'
		}

		@$mol_mem
		health( next?: any ) {
			console.log( 'health', next )
			return next ?? 15
		}

		@$mol_mem
		attack( next?: any ) {
			return next ?? 10
		}

		use_attack( target: $gen_engine_unit ) {
			console.log( 'use_attack' )
			target.health( target.health() - this.attack() )
		}

		use_skill() {
			console.log( 'use_skill' )
		}
	}
}
