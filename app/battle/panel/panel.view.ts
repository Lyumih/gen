namespace $.$$ {
	export class $gen_app_battle_panel extends $.$gen_app_battle_panel {

		name(): string {
			return this.unit().name() ?? ''
		}

		health(): string {
			return `❤️ ${ this.unit().health() }`
		}

		attack(): string {
			return `⚔️ ${ this.unit().attack() }`
		}

		speed(): string {
			return `👟 ${ this.unit().speed() }`
		}

		range(): string {
			return `🏹: ${ this.unit().attack_range() }`
		}

		sub(): readonly any[] {
			return [ this.unit() ? this.Unit_panel() : this.Empty_panel() ]
		}

		skill_list(): readonly any[] {
			return this.unit().skills().map( skill => this.Skill( skill.id ) )
		}

		skill_name( id: any ): string {
			return `🪄 ${ this.unit().skills().find( skill => skill.id === id )?.name() }` ?? ''
		}

		skill_icon( id: any ): string {
			return `🪄 ${ this.unit().skills().find( skill => skill.id === id )?.icon() }` ?? ''
		}

		unit_panel(): readonly any[] {
			return [
				this.Info(),
				this.active() ? this.Panel_actions() : null,
				this.Skill_list(),
			]
		}
	}
}
