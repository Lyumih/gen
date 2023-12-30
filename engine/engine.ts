namespace $.$$ {
	export class $gen_engine extends $.$mol_object {

		seed() {
			return '1'
		}

		@$mol_mem
		hero( next?: any ) {
			return next ?? {
				name: 'Milis',
				level: 5,
				skills: [ { name: 'Атака' }, { name: 'Защита' } ]
			}
		}

		@$mol_mem
		reward( next?: any ) {
			console.log( 'reward', next )
			return next ?? this.get_random_skill( true )
		}

		make_win( next?: any ) {
			console.log( 'make win', next )
			this.reward( 1 )
			this.get_random_skill( true )
			return next ?? false
		}

		@$mol_mem
		all_skills() {
			return [ {
				id: '1',
				name: 'Атака'
			}, {
				id: '2',
				name: 'Защита'
			}, {
				id: '3',
				name: 'Хил'
			} ]
		}

		@$mol_mem
		get_random_skill( next?: any ) {
			console.log( 'get_random_skill' )
			return this.$.$mol_array_lottery( this.all_skills() )
		}

		add_hero_skill() {
			console.log( 'add_hero_skill', this.hero() )
			const skills = [ ...this.hero().skills, this.get_random_skill() ]
			this.hero({...this.hero(), skills})
		}

	}
}
