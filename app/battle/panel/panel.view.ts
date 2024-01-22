namespace $.$$ {
	export class $gen_app_battle_panel extends $.$gen_app_battle_panel {

		name(): string {
			return this.unit().icon() + this.unit().name() ?? ''
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

		get_skill( id: string ) {
			return this.unit().skills().find( skill => skill.id === id )
		}

		skill_name( id: string ): string {
			return `🪄 ${ this.get_skill( id )?.name() }` ?? ''
		}

		skill_icon( id: any ): string {
			return `${ this.get_skill( id )?.icon() }` ?? ''
		}

		skill_hint( id: any ): string {
			return `${ this.get_skill( id )?.name() }\n${ this.get_skill( id )?.description() }`
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
