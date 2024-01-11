namespace $.$$ {

	type Item = { id: string, name: string, type: string }
	type Skill = Item & { level: number, modes: Mode[] }
	type Mode = Item & { type: 'mode' }
	export class $gen_engine extends $.$mol_object {

		seed() {
			return '1'
		}

		@$mol_mem
		hero( next?: any ) {
			return next ?? {
				name: 'Milis',
				level: 5,
				point: {
					skill: 4,
				},
				equip: this.hero_equipments(),
				skills: this.hero_skills(),
				inventory: this.inventory()
			}
		}

		@$mol_mem
		hero_skills( next?: any ): Skill[] {
			return next ?? [ { id: this.uuid(), type: 'skill', name: 'Атака', level: 1, modes: [ { id: this.uuid(), name: 'Урон x2', type: 'mode' } ] }, { id: this.uuid(), name: 'Защита', type: 'skill', level: 1 } ]
		}

		@$mol_mem
		hero_equipments( next?: any ): Item[] {
			return next ?? [ { id: this.uuid(), name: 'Кинжал', type: 'weapon' }, { id: this.uuid(), name: 'Пояс', type: 'armor' } ]
		}

		is_equipment( type?: string ) {
			return [ 'weapon', 'armor', 'equip' ].includes( type || '' )
		}

		hero_unequip( id: any, next?: any ) {
			const item = this.hero_equipments().find( item => item.id === id )
			this.hero_equipments( this.hero_equipments().filter( item => item.id !== id ) )
			this.inventory( [ ...this.inventory(), item ] )
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
			return [ create_skill( this.uuid(), 'Атака' ), create_skill( this.uuid(), 'Защита' ), create_skill( this.uuid(), 'Хил' ) ]
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
				this.hero_skills( skills )
			}
		}

		skill_unequip( id: string ) {
			const skill = this.hero_skills().find( item => item.id === id )
			if( skill ) {
				this.hero_skills( this.hero_skills().filter( item => item.id !== id ) )
				this.inventory( [ ...this.inventory(), skill ] )
			}
		}

		all_equip() {
			const create_equip = ( id: string, name: string ) => ( { id, name, type: 'equip' } )
			return [ create_equip( this.uuid(), 'Меч' ), create_equip( this.uuid(), 'Щит' ), create_equip( this.uuid(), 'Шлем' ) ]
		}

		all_mode() {
			const create_mode = ( id: string, name: string ) => ( { id, name, type: 'mode' } )
			return [ create_mode( this.uuid(), 'Урон: х2' ), create_mode( this.uuid(), 'Снаряды: +2' ), create_mode( this.uuid(), 'Дальность: +2' ) ]
		}

		@$mol_mem
		inventory( next?: any ): Item[] {
			return next ?? [ { id: this.uuid(), name: 'Меч', type: 'weapon' }, { id: this.uuid(), name: 'Щит', type: 'armor' } ]
		}

		inventory_sell( id: string ) {
			const item = this.inventory().find( item => item.id === id )
			this.shop( [ ...this.shop(), item ] )
			this.inventory( this.inventory().filter( item => item.id !== id ) )
		}

		inventory_equip( id: string ) {
			const item = this.inventory().find( item => item.id === id )
			this.is_equipment( item?.type ) ? this.hero_equipments( [ ...this.hero_equipments(), item ] ) : this.hero_skills( [ ...this.hero_skills(), item ] )
			this.inventory( this.inventory().filter( item => item.id !== id ) )
		}

		@$mol_mem
		shop( next?: any ): Item[] {
			return next ?? [ { id: this.uuid(), name: 'Лук', type: 'weapon' }, { id: this.uuid(), name: 'Перчатки', type: 'armor' } ]
		}

		shop_buy( id: string ) {
			const item = this.shop().find( item => item.id === id )
			this.inventory( [ ...this.inventory(), item ] )
			this.shop( this.shop().filter( item => item.id !== id ) )
		}

		uuid() {
			return this.$.$mol_guid()
		}

	}
}
