namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		attack_enabled(): boolean {
			return this.unit().health() > 0
		}

		health_title() {
			return `Здоровье: ${ this.unit().health() }`
		}

		attack_title() {
			return `Атака: ${ this.unit().attack() }`
		}
	}
}
