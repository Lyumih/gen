namespace $.$$ {
	export class $gen_app_game extends $.$gen_app_game {

		@$mol_mem
		result( next?: any ): string {
			return new $gen_generator().start( this.hero_level() )
		}

		generate( next?: any ) {
			return this.result( true )
		}
	}
}
