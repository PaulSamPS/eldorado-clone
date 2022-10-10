import React, { useState } from 'react';
import styles from './Image.module.scss';
import { Input } from '../../../../Ui';
import { ImageProps } from './Image.props';
import { v4 } from 'uuid';

export const Image = ({ setFiles }: ImageProps) => {
  const [previewFiles, setPreviewFiles] = useState<any[]>([]);

  const selectFile = (e: any) => {
    const images = [] as any[];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push({ picture: URL.createObjectURL(e.target.files[i]), number: v4() });
    }
    setPreviewFiles(images);
    setFiles(e.target.files);
  };

  return (
    <div className={styles.wrapper}>
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
  );
};
