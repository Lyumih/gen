namespace $.$$ {
	export class $gen_app_user extends $.$gen_app_user {

		login(): string {
			return this.user().login()
		}

		name(): string {
			return this.user().name()
		}

		email(): string {
			return this.user().email()
		}

		heroes_length(): string {
			return '' + this.user().units().length
		}
	}
}
