import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'

const IMG_EXTS =  ['jpg', 'jpeg', 'png'];
const checkIsImage = (fileName: string) => {
  const ext = fileName.split('.').pop() || '';
  return IMG_EXTS.includes(ext);
}

const renderImage = (image: File) => (
    <Image width={300} rounded src={URL.createObjectURL(image)} />
  )

const renderLink = (file: File) => (
  <a href={URL.createObjectURL(file)} target="_blank">{file.name}</a>
)

const DataView = ({ data }: { data: any[] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Jenis Kelamin</th>
          <th>Tanggal Lahir</th>
          <th>Foto</th>
          <th>CV</th>
          <th>Sertifikat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.gender}</td>
          <td>{new Date(item.birthOfDate).toLocaleDateString()}</td>
          <td>{checkIsImage(item.image?.name) ? renderImage(item.image) : renderLink(item.image)}</td>
          <td>{checkIsImage(item.cv?.name) ? renderImage(item.cv) : renderLink(item.cv)}</td>
          <td>{checkIsImage(item.certificate?.name) ? renderImage(item.certificate) : renderLink(item.certificate)}</td>
        </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DataView