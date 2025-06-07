'use client'
import { useRouter } from 'next/navigation'
import styles from "./style.module.scss";
import Button from '@/UI/Button'
import mainStore from '@/store/main.store';
import { observer } from 'mobx-react-lite';
const Index = observer(() => {
    const router = useRouter()
    return (
        mainStore.state.activeMobileMenu &&
        <div className={styles.mobile_menu}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <div className={styles.ico}/>
                    <span className={styles.name}>ТК “Спектр”</span>
                </div>
                <div className={styles.close} onClick={()=>{mainStore.closeMobileMenu()}}/>
            </div>
            <div className={styles.menu}>
                <Button text='Каталог' callback={()=>{router.push('/catalog')}} icon='catalog'/>
                <ul>
                    <li onClick={()=>{router.push('/cases')}}>Наши работы</li>
                    <li onClick={()=>{router.push('/company')}}>О компании</li>
                    <li onClick={()=>{router.push('/services')}}>Услуги</li>
                    <li onClick={()=>{router.push('/contacts')}}>Контакты</li>
                </ul>
            </div>
            <a href="https://wa.me/79916449781?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5." target='_blank' className={styles.whatsapp}>Написать в WhatsApp</a>
            <div className={styles.contacts}>
                <div className={styles.phone}><a href="tel:84951478226">8 (495) 147-82-26</a></div>
                <div className={styles.email}><a href='mailto:info@tkspectr.ru'>info@tkspectr.ru</a></div>
                <span className={styles.address}>Москва, Новоданиловская набережная, д. 6 к. 1, помещение. 6а/36</span>
            </div>
        </div>
    );
})

export default Index;
