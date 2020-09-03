export class Agent {
    'agent_id': string;
    'full_name': string;
    'email': string;
}

export class Calltype {
    'calltype_id': string;
    'name': string;
}

export class Calls {
    'call_id': string;
    'calltype_id': string;
    'agent': [
        {
            'agent_id': string;
            'channel_no': number;
        }
    ];
    'customer': [
      {
        'full_name': string;
        'channel_no': number;
      }
    ];
    'call_start_time': string;
    'gs_file_url': string;
    'duration': number;
}

export class Transcript {
  'call_id': string;
  'file_url': string;
  'calltype_id': string;
  'call_datetime': string;
  'duration': number;
  'agent': [
    {
      'agent_id': string;
      'channel_no': number;
    }
  ];
  'customer': [
    {
      'full_name': string
      'channel_no': number;
    }
  ];
  'script': [
    {
      'order': number;
      'similarity': number;
      'sentence': string;
      'matching_sentence': string;
    }
  ];
  'transcript': [
    {
      'order': number;
      'similarity': number;
      'sentence': string;
      'matching_sentence': string;
      'channel': number;
      'timeFrom': number;
      'timeTo': number;
    }
  ];
}
