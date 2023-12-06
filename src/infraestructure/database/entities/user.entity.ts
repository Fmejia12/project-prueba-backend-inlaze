import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 45,
        comment: 'Apellidos del usuario',
    })
    fullName: string

    @Column({
        type: 'varchar',
        length: 200,
        unique: true,
        comment: 'Correo del usuario',
    })
    email: string

    @Column({
        type: 'text',
        comment: 'Contraseña del usuario',
    })
    password: string
}
