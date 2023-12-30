namespace $.$$ {
	export class $gen_app_hero extends $.$gen_app_hero {
		name(): string {
			return `Имя: ${this.engine().hero().name}`
		}

		skills() {
			return `Умения: ${JSON.stringify(this.engine().hero().skills)}`
		}
	}
}
