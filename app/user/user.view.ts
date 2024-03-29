namespace $.$$ {
	export class $gen_app_user extends $.$gen_app_user {

		login(): string {
			return this.user().login()
		}

		name( next?: string ): string {
			return this.user().name( next )
		}

		email(): string {
			return this.user().email()
		}

		heroes_length(): string {
			return '' + this.user().units().length
		}

		logout( next?: any ) {
			console.log( 'logout' )
			this.user().logout()
		}
	}
}
