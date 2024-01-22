namespace $.$$ {
	export class $gen_app extends $.$gen_app {

		@$mol_mem
		party( next?: $gen_engine_item_unit[] ): readonly $gen_engine_item_unit[] {
			return this.user().units( next )
		}

		active_hero( next?: any ): $gen_engine_item_unit {
			return next ?? this.party()[ 0 ]
		}

		@$mol_mem
		user( next?: $gen_engine_user ): $gen_engine_user {
			return next ?? new $gen_engine_user_all().misha()
		}

		clear_storage( next?: any ) {
			console.log( 'clear storage' )
			localStorage.clear()
		}
	}
}
