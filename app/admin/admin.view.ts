namespace $.$$ {
	export class $gen_app_admin extends $.$gen_app_admin {

		make_win( next?: any ) {
			this.engine().make_win( true )
		}

		add_hero_skill( next?: any ) {
			this.engine().add_hero_skill()
			console.log( this.engine() )
		}
	}
}
