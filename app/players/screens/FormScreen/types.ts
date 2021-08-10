import { Player } from 'players/types';
import * as Yup from 'yup';

export type Props = {
    onGoBack: () => void,
    initialValues: Player,
    onSubmit: (player: Player) => void,
}

export const validationSchema: Yup.SchemaOf<Player> = Yup.object().shape({
    name: Yup.string()
        .required('Por favor, informe o nome do jogador')
        .trim()
        .max(255, 'Numero maximo de 255 caracteres atingido'),
    nickname: Yup.string()
        .trim()
        .max(255, 'Numero maximo de 255 caracteres atingido'),
    position: Yup.string()
        .required('Por favor, informe a posição em que o jogador atua')
        .trim(),
    payment: Yup.string()
        .required('Selecione o metodo de pagamento')
        .trim()
        .max(255, 'Numero maximo de 255 caracteres atingido'),
}).defined();

