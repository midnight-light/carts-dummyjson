export interface CustomTheme {
  colors: {
    primary: {
      base: string;
    };
    bg: {
      base: string;
    };
    fg: {
      base: string;
    };
    secondary: {
      base: string;
    };
    error: {
      base: string;
    };
    warning: {
      base: string;
    };
    success: {
      base: string;
    };
    info: {
      base: string;
    };
    text: {
      label: string;
      help: string;
    };
  };
  typography: {
    families: {
      sansSerif: string;
      serif: string;
      monospace: string;
    };
    weights: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
    sizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
}

export const lightTheme: CustomTheme = {
  colors: {
    primary: {
      base: '#537cf4',
    },
    bg: {
      base: '#f7f9ff',
    },
    fg: {
      base: '#121827',
    },
    secondary: {
      base: '#e55b45',
    },
    error: {
      base: '#E04355',
    },
    warning: {
      base: '#FF7F44',
    },
    success: {
      base: '#5AC189',
    },
    info: {
      base: '#66BCFE',
    },
    text: {
      label: '#879099',
      help: '#737373',
    },
  },
  typography: {
    families: {
      sansSerif: '"Inter", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      monospace: '"Fira Code", "Courier New", monospace',
    },
    weights: {
      light: 200,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 21,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
};
