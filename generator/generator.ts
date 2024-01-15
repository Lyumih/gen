namespace $ {
	export class $gen_generator extends $mol_object {

		seed() {
			return '1'
		}

		start( level: number ) {
			const enemies = this.get_enemies( level )

			const format_enemies = enemies.map( ( enemy, index ) => {
				return `\n**Враг ${ index + 1 }**\nХарактеристики: ${ enemy.point.stats }\nУмения: ${ enemy.point.skill }\nПредметы: ${ enemy.point.equip }\n`
			} )
			return `
			Местность: ${ this.get_terrain() }
			Режим: ${ this.get_mode() }
			Врагов: ${ enemies.length }
			${ format_enemies.join( '\n' ) }
			`
		}

		get_enemies( level: number ) {
			const count = $mol_array_lottery( [ 1, 2, 3, 4 ] )
			const enemies = []
			for( let i = 0; i < count; i++ ) {
				enemies.push( this.get_enemy( level ) )
			}
			return enemies
		}

		get_enemy( level: number ) {
			const stats = level - this.random( level - 2 )
			const skill = this.random( level - stats )
			const equip = level - stats - skill
			return {
				name: 'Враг',
				level: level,
				skills: [],
				point: {
					stats,
					skill,
					equip,
				}
			}
		}

		random( max: number ) {
			return Math.floor( Math.random() * max )
		}

		get_mode() {
			return $mol_array_lottery( [ 'битва', 'все против всех', 'предательство' ] )
		}

		get_terrain() {
			return $mol_array_lottery( [ 'обычная', 'горы', 'низины', 'горы и низины' ] )
		}
	}
}
