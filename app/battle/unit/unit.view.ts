namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		attack_enabled(): boolean {
			return this.unit()?.health() > 0
		}

		id(): string {
			return this.unit()?.id
		}

		xy(): string {
			return `${ this.unit()?.x() }, ${ this.unit()?.y() }`
		}

		health() {
			return `Здоровье: ${ this.unit()?.health() }`
		}

		attack() {
			return `Атака: ${ this.unit()?.attack() }`
		}

		name() {
			return `${ this.unit()?.name() }`
		}

		type() {
			return this.unit()?.type()
		}

		skills() {
			return this.unit()?.skills()
		}

		skill_list(): readonly any[] {
			return this.skills()?.map( skill => this.Skill( skill.id ) ) ?? []
		}

		get_skill( id: string ) {
			return this.skills().find( skill => skill.id === id )
		}

		skill_name( id: any ): string {
			return `${ this.get_skill( id )?.name() }: ${ this.get_skill( id )?.id }` || 'no name'
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.description() || 'no description'
		}


	}
}
