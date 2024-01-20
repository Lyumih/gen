namespace $.$$ {
	export class $gen_app_battle_panel extends $.$gen_app_battle_panel {

		end_turn( next?: any ) {
			console.log( 'end turn' )
		}

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
			console.log( this.unit() )
			return [ this.unit() ? this.Unit_panel() : this.Empty_panel() ]
			// return [ this.Unit_panel(), this.Empty_panel() ]
		}
	}
}
