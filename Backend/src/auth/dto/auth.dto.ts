import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
    @ApiProperty({ example: 'John Doe', description: 'The full name of the user' })
    fullName?: string;

    @ApiProperty({ example: 'john@example.com', description: 'The email address of the user' })
    email?: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user', minLength: 6 })
    password?: string;

    @ApiProperty({ example: '+1234567890', description: 'The phone number of the user', required: false })
    phoneNumber?: string;

    @ApiProperty({ example: 'I am a software engineer', description: 'Modules bio', required: false })
    bio?: string;
}

export class LoginDto {
    @ApiProperty({ example: 'john@example.com', description: 'The email address of the user' })
    email!: string;

    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    password!: string;
}
