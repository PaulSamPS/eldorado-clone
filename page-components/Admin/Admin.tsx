import React, { useState, MouseEvent, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import uuid from 'uuid';
import { addProduct } from '../../redux/actions/productAction';
import styles from './Admin.module.scss';
import { Button } from '../../components/Ui/Button/Button';
import { Input } from '../../components/Ui/Input/Input';

const CreateProduct = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number | undefined>(undefined);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);
  const [addOldPrice, setAddOldPrice] = useState<boolean>(false);
  const [files, setFiles] = useState<any[]>([]);
  const [previewFiles, setPreviewFiles] = useState<any[]>([]);
  const [info, setInfo] = useState<any[]>([]);
  const [itemNumber, setItemNumber] = useState<any>('');
  const dispatch: any = useAppDispatch();

  const selectFile = (e: any) => {
    const images = [] as any[];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push({ picture: URL.createObjectURL(e.target.files[i]), number: uuuid.v4() });
    }
    setPreviewFiles(images);
    setFiles(e.target.files);
  };

  const handleAddProduct = (e: { preventDefault: () => void }) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    addOldPrice && formData.append('oldPrice', `${oldPrice}`);
    for (let i = 0; i < files.length; i++) {
      formData.append('img', files[i]);
    }
    formData.append('features', JSON.stringify(info));
    e.preventDefault();
    dispatch(addProduct(formData));
  };

  const handleAddOldPrice = () => {
    setAddOldPrice(true);
  };

  return (
    <div className={styles.createProductBlock}>
      <h2>Добавление продукта</h2>
      <form className={styles.product} encType='multipart/form-data'>
        <label htmlFor='Название'>
          Название:
          <Input
            name='Название'
            placeholder='Название'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor='Цена'>
          Цена:
          <Input
            name='Цена'
            placeholder='Цена'
            type='text'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <label htmlFor='Старая цена'>
          Старая цена:
          {!addOldPrice ? (
            <Button className={styles.btnOldPrice} appearance='primary' onClick={handleAddOldPrice}>
              Добавить
            </Button>
          ) : (
            <Input
              name='Старая цена'
              placeholder='Старая цена'
              type='text'
              value={oldPrice}
              onChange={(e) => setOldPrice(Number(e.target.value))}
            />
          )}
        </label>
        {previewFiles.length > 0 && (
          <div className={styles.previewBlock}>
            {previewFiles.map((f: any, index) => (
              <div className={styles.previewImage} key={f.picture}>
                <img src={f.picture} alt={'image' + index} />
              </div>
            ))}
          </div>
        )}
        <div className={styles.inputFile}>
          <label htmlFor='img'>
            Изображения:
            <Input
              multiple
              id='file'
              name='img'
              type='file'
              onChange={selectFile}
              className={styles.file}
            />
            <label htmlFor='file'>
              <span className={styles.inputBtn}>
                {previewFiles.length <= 0 ? 'Выберите файлы' : 'Файлы выбраны'}
              </span>
            </label>
          </label>
        </div>
      </form>
      <div className={styles.blockSubmit}>
        <Button className={styles.submit} appearance='primary' onClick={handleAddProduct}>
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default CreateProduct;
