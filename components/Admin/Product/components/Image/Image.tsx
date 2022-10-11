import React, { useState } from 'react';
import styles from './Image.module.scss';
import { Input } from '../../../../Ui';
import { ImageProps } from './Image.props';
import { v4 } from 'uuid';

export const Image = ({ setFiles, setFiles3d }: ImageProps) => {
  const [previewFiles, setPreviewFiles] = useState<any[]>([]);
  const [previewFiles3d, setPreviewFiles3d] = useState<any[]>([]);
  console.log(previewFiles, 'prev');
  console.log(previewFiles3d, '3d');

  const selectFile = (e: any) => {
    const images = [] as any[];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push({ picture: URL.createObjectURL(e.target.files[i]), number: v4() });
    }
    setPreviewFiles(images);
    setFiles(e.target.files);
  };

  const selectFile3d = (e: any) => {
    const images3d = [] as any[];
    for (let i = 0; i < e.target.files.length; i++) {
      images3d.push({ picture3d: URL.createObjectURL(e.target.files[i]), number: v4() });
    }
    setPreviewFiles3d(images3d);
    setFiles3d(e.target.files);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        {previewFiles.length > 0 && (
          <div className={styles.preview}>
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
      </div>
      <div className={styles.img}>
        {previewFiles3d.length > 0 && (
          <div className={styles.preview}>
            {previewFiles3d.slice(0, 10).map((f: any, index) => (
              <div className={styles.previewImage} key={f.picture3d}>
                <img src={f.picture3d} alt={'image' + index} />
              </div>
            ))}
          </div>
        )}
        <div className={styles.inputFile}>
          <label htmlFor='img3d'>
            Изображения3d:
            <Input
              multiple
              id='file3d'
              name='img3d'
              type='file'
              onChange={selectFile3d}
              className={styles.file}
            />
            <label htmlFor='file3d'>
              <span className={styles.inputBtn}>
                {previewFiles3d.length <= 0 ? 'Выберите файлы' : 'Файлы выбраны'}
              </span>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};
