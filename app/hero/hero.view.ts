namespace $.$$ {
	export class $gen_app_hero extends $.$gen_app_hero {
		name(): string {
			return `Имя: ${ this.engine().hero().name }`
		}

		skill_points(): string {
			return `Очков умений: ${ this.engine().hero().point.skill }`
		}

		skills() {
			return `Умения: ${ JSON.stringify( this.engine().hero_skills, null, 2 ) }`
		}

		skill_list(): readonly any[] {
			return this.engine().hero_skills().map( skill => this.Skill( skill.id ) )
		}

		get_skill( id: string ) {
			return this.engine().hero_skills().find( skill => skill.id === id )
		}

		skill_name( id: string ): string {
			return `Умение: ${ this.get_skill( id )?.name }`
		}

		skill_level( id: any ): string {
			return `Уровень: ${ this.get_skill( id )?.level }`
		}

		skill_level_up( id: string, next?: any ) {
			this.engine().skill_level_up( id )
		}

	}
}
