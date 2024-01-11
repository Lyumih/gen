namespace $.$$ {

	type Skill = { id: string, name: string, level: number }

	export class $gen_engine extends $.$mol_object {

		seed() {
			return '1'
		}

		@$mol_mem
		hero( next?: any ) {
			return next ?? {
				name: 'Milis',
				level: 5,
				skills: this.hero_skills(),
				point: {
					skill: 4,
				}
			}
		}

		@$mol_mem
		hero_skills( next?: any ): Skill[] {
			console.log( next )
			return next ?? [ { id: '1', name: 'Атака', level: 1 }, { id: '2', name: 'Защита', level: 1 } ]
		}

		@$mol_mem
		reward( next?: any ) {
			return next ?? this.get_random_skill()
		}

		make_win( next?: any ) {
			this.reward()
			this.get_random_skill()
			return next ?? false
		}

		@$mol_mem
		all_skills() {
			const create_skill = ( id: string, name: string ) => ( { id, name, type: 'skill' } )
			return [ create_skill( '1', 'Атака' ), create_skill( '2', 'Защита' ), create_skill( '3', 'Хил' ) ]
		}

		@$mol_mem
		get_random_skill( next?: any ) {
			return { ...this.$.$mol_array_lottery( this.all_skills() ), level: 1 }
		}

		add_hero_skill() {
			this.hero_skills( [ ...this.hero_skills(), this.get_random_skill() ] )
		}

		skill_level_up( id: string ) {
			const skills = this.hero_skills()
			const skill = skills.find( skill => skill.id === id )
			if( skill && skills ) {
				skills.find( skill => skill.id === id )!.level = skill.level + 1
				console.log( skills )
				this.hero_skills( skills )
			}
		}

		all_equip() {
			const create_equip = ( id: string, name: string ) => ( { id, name, type: 'equip' } )
			return [ create_equip( '1', 'Меч' ), create_equip( '2', 'Щит' ), create_equip( '3', 'Шлем' ) ]
		}

		all_mode() {
			const create_mode = ( id: string, name: string ) => ( { id, name, type: 'mode' } )
			return [ create_mode( '1', 'Урон: х2' ), create_mode( '2', 'Снаряды: +2' ), create_mode( '3', 'Дальность: +2' ) ]
		}
	}
}
