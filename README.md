# Newsletter Project

This project is a simple newsletter signup form that uses Node.js and Mailchimp to add subscribers to a mailing list.

## Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory of your project and define the following variables:

MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_mailchimp_list_id

4. Start the server by running `npm start`.

## Usage

1. Open your web browser and go to `http://localhost:5000`.
2. Fill out the form with your first name, last name, and email address.
3. Click the "Subscribe" button to submit the form.
4. If the form was submitted successfully, you will be redirected to a success page. Otherwise, you will be redirected to an error page.

## Dependencies

- express
- body-parser
- path
- node-fetch
- dotenv

## License

This project is licensed under the MIT License - see the LICENSE file for details.
