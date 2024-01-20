namespace $.$$ {
	export class $gen_app_battle_panel extends $.$gen_app_battle_panel {

		name(): string {
			return this.unit().name() ?? ''
		}

		health(): string {
			return `ХП: ${ this.unit().health() }`
		}

		attack(): string {
			return `Атака: ${ this.unit().attack() }`
		}

		sub(): readonly any[] {
			return [ this.unit() ? this.Unit_panel() : this.Empty_panel() ]
		}

		skill_list(): readonly any[] {
			return this.unit().skills().map( skill => this.Skill( skill.id() ) )
		}

		skill_name( id: any ): string {
			return this.unit().skills().find( skill => skill.id() === id )?.name() ?? ''
		}
	}
}
