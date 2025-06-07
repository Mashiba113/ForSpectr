'use client'
import Button from '@/UI/Button'

import styles from './style.module.scss'
import classNames from 'classnames';
import modalStore from '@/store/modal.store';

import serviceStore from '@/store/service.store'


const index = () => {
    const handlerClick = (service:string) => {
        serviceStore.setTargetService(service)
        modalStore.openService()
    }

    return (
        <div className={styles.services}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Услуги</h2>
                    <div className={styles.services_items}>
                        <div className={styles.services_items_row}>
                            <div className={styles.services_item} onClick={()=>{handlerClick('Перевозка нерудных материалов')}}>
                                <h3>Перевозка нерудных материалов</h3>
                            </div>
                            <div className={styles.services_item}  onClick={()=>{handlerClick('Вывоз грунта по системе ОССиГ')}}>
                                <h3>Вывоз грунта по системе ОССиГ</h3>
                                <p>с талонами и без талонов <br/> и дальнейшей утилизацией,<br/> если потребуется</p>
                            </div>
                        </div>
                        <div className={classNames(styles.services_item, styles.no_bg)}>
                            <div className={styles.text}>
                                <h3>Прочие<br/>услуги</h3>
                                <ul>
                                    <li>Земляные работы</li>
                                    <li>Экскаваторы</li>
                                    <li>Погрузчики</li>
                                    <li>Уборка снега <br/> в зимний период</li>
                                </ul>
                            </div>
                            <div className={styles.btns}>
                                <Button text='Рассчитать стоимость' callback={()=>{modalStore.openCalculator()}} style={{width:'100%'}}/>
                                <div className={styles.btn} onClick={()=>{router.push('/services')}}>Все услуги <span>5</span></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default index;
