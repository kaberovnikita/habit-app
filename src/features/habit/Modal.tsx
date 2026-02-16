import styles from './Modal.module.css';
import closeIcon from '..//../assets/cross.svg'
import Input from '../../shared/ui/Input/Input';
import { texts } from '../../shared/lib/consts/texts';
import PrimaryButton from '../../shared/ui/PrimaryButton/PrimaryButton';
import ButtonIconNewHabit from '../../shared/ui/ButtonIconNewHabit/ButtonIconNewHabit';
import IconSport from '../../shared/ui/IconSport/IconSport';
import IconBottle from '../../shared/ui/IconBottle/IconBottle';
import IconFood from '../../shared/ui/IconFood/IconFood';
import { useState, type SyntheticEvent } from 'react';
import { useHabitsStore } from '../../entities/habit/store/store';
import { useNavigate } from 'react-router-dom';

function Modal() {
    const navigate = useNavigate()
    const [icon, setIcon] = useState<'sport' | 'bottle' | 'food' | null>(null);
    const [title, setTitle] = useState("")
    const [target, setTarget] = useState("")

    const isOpen = useHabitsStore((state) => state.modalIsOpen)
    const close = useHabitsStore((state) => state.closeModal)
    const addHabit = useHabitsStore((state) => state.addHabit)

    if (!isOpen) {
        return null
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!title.trim() || !target.trim() || !icon) {
            return;
        }

        const habit = {
            id: crypto.randomUUID(),
            title: title,
            target: Number(target),
            icon: icon,
            tasks: [],
        }

        addHabit(habit)
        setTitle("")
        setTarget("")
        setIcon(null)
        close()
        navigate(`/habits/${habit.id}`)
    }

    return (
        <div className={styles.overlay}>
            <form className={styles.modal} onSubmit={handleSubmit}>
                <button type='button' onClick={close} className={styles.modal__close}>
                    <img src={closeIcon} alt="Закрыть" />
                </button>
                <div className={styles.modal__titles}>
                    <h1 className={styles.titles__new_habit}>{texts.new}</h1>
                    <h3 className={styles.titles__icon}>{texts.icon}</h3>
                </div>
                <div className={styles.modal__buttonicons}>
                    <ButtonIconNewHabit
                        isActive={icon === 'sport'}
                        onClick={() => setIcon('sport')}>
                        {(color) => <IconSport color={color} />}
                    </ButtonIconNewHabit>
                    <ButtonIconNewHabit
                        isActive={icon === 'bottle'}
                        onClick={() => setIcon('bottle')}>
                        {(color) => <IconBottle color={color} />}
                    </ButtonIconNewHabit>
                    <ButtonIconNewHabit
                        isActive={icon === 'food'}
                        onClick={() => setIcon('food')}>
                        {(color) => <IconFood color={color} />}
                    </ButtonIconNewHabit>
                </div>
                <div className={styles.modal__inputs}>
                    <Input
                        placeholder={texts.title}
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <Input
                        placeholder={texts.target}
                        value={target}
                        onChange={(event) => setTarget(event.target.value)}
                    />
                </div>
                <PrimaryButton type='submit' text={texts.add} />
            </form>
        </div>
    )
}

export default Modal