import { useState, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const FormProfile = ({ onSubmit }: { onSubmit: (_val: any) => void }) => {
  const refForm = useRef<HTMLFormElement>(null);
  const fName = useRef<HTMLInputElement>(null);
  const fAddress = useRef<HTMLTextAreaElement>(null);
  const [gender, setGender] = useState<string>('');
  const fBirthOfDate = useRef<HTMLInputElement>(null);
  const fImage = useRef<HTMLInputElement>(null);
  const fCv = useRef<HTMLInputElement>(null);
  const fCertificate = useRef<HTMLInputElement>(null);
  const [validated, setValidated] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setAlert(false);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      setAlert(true);
      event.stopPropagation();
      return;
    };
    const value = {
      name: fName.current?.value,
      address: fAddress.current?.value,
      gender,
      birthOfDate: fBirthOfDate.current?.value,
      image: fImage.current?.files?.length ? fImage.current.files[0] : null,
      cv: fCv.current?.files?.length ? fCv.current.files[0] : null,
      certificate: fCertificate.current?.files?.length ? fCertificate.current.files[0] : null,
    };
    console.log({ form, value });
    onSubmit(value);
    resetForm();
  };

  const resetForm = () => {
    refForm.current?.reset()
    setGender('');
    setAlert(false);
    setValidated(false);
  }

  return (
    <div>
      {alert && (
        <Alert variant="danger">
          File belum dimasukkan dan semua inputan belum terisi!
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit} ref={refForm}>
        <Form.Group className="mb-3">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            required
            type="input"
            placeholder="Masukkan Nama"
            name="name"
            ref={fName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            required
            as="textarea"
            type="input"
            placeholder="Masukkan Alamat"
            name="address"
            ref={fAddress}
            style={{ minHeight: "100px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jenis Kelamin</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Laki-Laki"
              name="gender"
              checked={gender === "Laki-Laki"}
              onChange={e => setGender(e.currentTarget.value)}
              value="Laki-Laki"
              required
            />
            <Form.Check
              inline
              type="radio"
              label="Perempuan"
              name="gender"
              checked={gender === "Perempuan"}
              onChange={e => setGender(e.currentTarget.value)}
              value="Perempuan"
              required
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tanggal Lahir</Form.Label>
          <Form.Control
            type="date"
            placeholder="Masukkan Tanggal Lahir"
            name="birthOfDate"
            required
            ref={fBirthOfDate}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file"
            placeholder="Foto"
            id="image"
            name="image"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
            className="w-100"
            required
            ref={fImage}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CV</Form.Label>
          <Form.Control
            type="file"
            placeholder="CV"
            id="cv"
            name="cv"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
            className="w-100"
            required
            ref={fCv}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sertifikat</Form.Label>
          <Form.Control
            type="file"
            id="certificate"
            placeholder="Sertifikat"
            name="certificate"
            accept=".jpg,.jpeg,.png,.doc,.docx,.pdf"
            className="w-100"
            required
            ref={fCertificate}
          />
        </Form.Group>

        <Button
          className="me-2"
          type="submit"
        >
          Save
        </Button>
        <Button
          type="reset"
          variant="danger"
        >
          Reset
        </Button>
      </Form>
    </div>
  )
}

export default FormProfile