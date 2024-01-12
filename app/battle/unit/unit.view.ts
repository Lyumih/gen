namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		attack_enabled(): boolean {
			return this.unit().health() > 0
		}

		health() {
			return `Здоровье: ${ this.unit().health() }`
		}

		attack() {
			return `Атака: ${ this.unit().attack() }`
		}

		name() {
			return `Имя: ${ this.unit().name() }`
		}

		use_attack( next?: any ) {
			this.unit().use_attack( this.target() )
		}
	}
}
