namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		attack_enabled(): boolean {
			return this.source().health > 0
		}

		health_title() {
			return `Здоровье: ${ this.source().health }`
		}

		attack_title() {
			return `Атака: ${ this.source().attack }`
		}
	}
}
