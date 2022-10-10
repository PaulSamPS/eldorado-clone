import React, { useState } from 'react';
import { addProduct } from '../../../redux/actions/productAction';
import { Button } from '../../Ui/Button/Button';
import { Features, Image, Name, Price } from './components';
import { useAppSelector } from '../../../hooks/useAppSelector';
import styles from './Add.module.scss';

export const Add = (): JSX.Element => {
  const { features } = useAppSelector((state) => state.featuresReducer);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number | undefined>(0);
  const [addOldPrice, setAddOldPrice] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);

  const handleAddProduct = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    addOldPrice
      ? formData.append('oldPrice', `${oldPrice}`)
      : formData.append('oldPrice', `${oldPrice}`);
    for (let i = 0; i < files.length; i++) {
      formData.append('img', files[i]);
    }
    formData.append('features', JSON.stringify(features));
    await addProduct(formData);
  };

  return (
    <div className={styles.createProductBlock}>
      <h2>Добавление продукта</h2>
      <form className={styles.product} encType='multipart/form-data'>
        <Name name={name} setName={setName} />
        <Price
          price={price}
          setPrice={setPrice}
          oldPrice={oldPrice!}
          setOldPrice={setOldPrice}
          addOldPrice={addOldPrice}
          setAddOldPrice={setAddOldPrice}
        />
        <Image setFiles={setFiles} />
        <Features />
      </form>
      <div className={styles.blockSubmit}>
        <Button className={styles.submit} appearance='primary' onClick={handleAddProduct}>
          Отправить
        </Button>
      </div>
    </div>
  );
};
